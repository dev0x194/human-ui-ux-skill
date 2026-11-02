import React, { useMemo, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Task = { id: string; time: string; title: string; note: string };
const TASKS: Task[] = [
  { id: 'a', time: '09:00', title: 'Sketch the first screen', note: 'Lead with the actual user task' },
  { id: 'b', time: '10:30', title: 'Review the core interaction', note: 'Find friction before adding polish' },
  { id: 'c', time: '14:00', title: 'Ship a small improvement', note: 'One complete, useful change' },
];

const C = {
  ink: '#252820', muted: '#66685E', cream: '#F5F3EC', white: '#FFFEFA',
  line: '#D7D7CB', accent: '#5E6F40', pale: '#E8EDDA', subtle: '#EFEEE8',
};

export default function IndexScreen() {
  const [done, setDone] = useState<string[]>(['a']);
  const { width } = useWindowDimensions();
  const wide = width >= 850;
  const complete = done.length;
  const progress = useMemo(() => Math.round((complete / TASKS.length) * 100), [complete]);

  function toggle(id: string) {
    setDone((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  return (
    <SafeAreaView style={styles.root} edges={['top', 'bottom']}>
      <ScrollView
        contentContainerStyle={[styles.content, { paddingTop: 28 }]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.wrap}>
          <View style={styles.topbar}>
            <Text style={styles.wordmark}>daymark<Text style={styles.wordmarkDot}>.</Text></Text>
            <View style={styles.topLabel}><Text style={styles.topLabelText}>A quieter way to plan</Text></View>
          </View>

          <View style={[styles.hero, wide && styles.heroWide]}>
            <View style={[styles.intro, wide && styles.introWide]}>
              <Text style={styles.eyebrow}>MONDAY / YOUR DAY, IN FOCUS</Text>
              <Text style={[styles.headline, { fontSize: wide ? 68 : width < 370 ? 40 : 49, lineHeight: wide ? 73 : width < 370 ? 46 : 55 }]}>
                Less noise.{"\n"}More <Text style={styles.headlineAccent}>done.</Text>
              </Text>
              <Text style={styles.description}>
                A small home for the work that matters today. Three priorities, a little breathing room, and no pretend productivity metrics.
              </Text>
              <View style={styles.noteRow}>
                <View style={styles.noteDot} />
                <Text style={styles.note}>The interface stays out of your way.</Text>
              </View>
            </View>

            <View style={[styles.taskPanel, wide && styles.taskPanelWide]}>
              <View style={styles.panelTop}>
                <View>
                  <Text style={styles.panelEyebrow}>TODAY'S PRIORITIES</Text>
                  <Text style={styles.panelTitle}>Make it count.</Text>
                </View>
                <Text style={styles.progressText}>{complete}/{TASKS.length}</Text>
              </View>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${progress}%` as `${number}%` }]} />
              </View>
              <View style={styles.list}>
                {TASKS.map((task) => {
                  const checked = done.includes(task.id);
                  return (
                    <Pressable
                      key={task.id}
                      onPress={() => toggle(task.id)}
                      accessibilityRole="checkbox"
                      accessibilityLabel={task.title}
                      accessibilityState={{ checked }}
                      testID={`task-${task.id}`}
                      style={({ pressed }) => [styles.taskRow, pressed && styles.taskPressed]}
                    >
                      <View style={[styles.check, checked && styles.checkActive]}>
                        {checked && <Text style={styles.checkGlyph}>✓</Text>}
                      </View>
                      <View style={styles.taskText}>
                        <Text style={[styles.taskTitle, checked && styles.completed]}>{task.title}</Text>
                        <Text style={styles.taskNote}>{task.note}</Text>
                      </View>
                      <Text style={styles.taskTime}>{task.time}</Text>
                    </Pressable>
                  );
                })}
              </View>
              <Text style={styles.footerNote} accessibilityLiveRegion="polite">
                {complete === TASKS.length ? 'All clear. Enjoy the breathing room.' : `${TASKS.length - complete} things left. Keep it simple.`}
              </Text>
            </View>
          </View>

          <View style={styles.bottomLine}>
            <Text style={styles.bottomText}>DESIGNED AROUND YOUR DAY — NOT A DASHBOARD</Text>
            {wide && <Text style={styles.bottomText}>EXPO / ANDROID · IOS · WEB</Text>}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.cream },
  content: { flexGrow: 1, paddingHorizontal: 22, paddingBottom: 42 },
  wrap: { width: '100%', maxWidth: 1120, alignSelf: 'center' },
  topbar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 22, borderBottomWidth: 1, borderColor: C.line },
  wordmark: { fontSize: 26, fontWeight: '800', letterSpacing: -1.3, color: C.ink },
  wordmarkDot: { color: C.accent },
  topLabel: { borderWidth: 1, borderColor: C.line, borderRadius: 100, paddingHorizontal: 11, paddingVertical: 7 },
  topLabelText: { fontSize: 11, color: C.muted, fontWeight: '600' },
  hero: { paddingTop: 38, gap: 34 },
  heroWide: { flexDirection: 'row', gap: 58, alignItems: 'center', paddingTop: 78 },
  intro: { flex: 1, gap: 19 },
  introWide: { maxWidth: 510 },
  eyebrow: { color: C.accent, fontSize: 11, fontWeight: '800', letterSpacing: 2.1 },
  headline: { fontWeight: '800', letterSpacing: -2.4, color: C.ink },
  headlineAccent: { color: C.accent },
  description: { maxWidth: 435, fontSize: 17, lineHeight: 27, color: C.muted },
  noteRow: { flexDirection: 'row', gap: 10, alignItems: 'center', paddingTop: 8 },
  noteDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: C.accent },
  note: { fontSize: 12, fontWeight: '600', color: C.muted },
  taskPanel: { backgroundColor: C.white, borderWidth: 1, borderColor: C.line, padding: 23, borderRadius: 6, width: '100%' },
  taskPanelWide: { width: 500, flexShrink: 1 },
  panelTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  panelEyebrow: { fontSize: 10, fontWeight: '800', letterSpacing: 1.7, color: C.muted, marginBottom: 9 },
  panelTitle: { fontSize: 25, fontWeight: '700', color: C.ink, letterSpacing: -0.8 },
  progressText: { fontSize: 13, fontWeight: '800', color: C.accent, paddingTop: 4 },
  progressTrack: { height: 4, backgroundColor: C.subtle, marginTop: 23, marginBottom: 12, overflow: 'hidden', borderRadius: 8 },
  progressFill: { height: 4, backgroundColor: C.accent, borderRadius: 8 },
  list: {},
  taskRow: { minHeight: 80, flexDirection: 'row', alignItems: 'center', paddingVertical: 13, gap: 12, borderBottomWidth: 1, borderColor: C.line },
  taskPressed: { backgroundColor: C.pale },
  check: { width: 28, height: 28, borderRadius: 4, borderWidth: 1.5, borderColor: '#A4AC91', alignItems: 'center', justifyContent: 'center' },
  checkActive: { backgroundColor: C.accent, borderColor: C.accent },
  checkGlyph: { fontSize: 16, fontWeight: '800', color: C.white },
  taskText: { flex: 1, minWidth: 0 },
  taskTitle: { fontSize: 14, color: C.ink, fontWeight: '700', lineHeight: 20 },
  completed: { textDecorationLine: 'line-through', color: C.muted },
  taskNote: { fontSize: 11, color: C.muted, marginTop: 3, lineHeight: 16 },
  taskTime: { fontSize: 10, color: C.muted, fontWeight: '700' },
  footerNote: { fontSize: 12, color: C.muted, marginTop: 19 },
  bottomLine: { borderTopWidth: 1, borderColor: C.line, marginTop: 55, paddingTop: 17, flexDirection: 'row', justifyContent: 'space-between' },
  bottomText: { fontSize: 10, color: C.muted, fontWeight: '800', letterSpacing: 1.1 },
});
